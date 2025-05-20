const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 정적 파일 서비스 (현재 폴더 기준)
app.use(express.static(__dirname));

// 클라이언트로 chat.html 보내기
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});

// 접속자 아바타 관리용 객체
const users = {}; // { socketId: avatarData }

io.on('connection', (socket) => {
  console.log('유저 접속:', socket.id);

  // 클라이언트가 내 아바타 정보 보냄
  socket.on('join', (avatarData) => {
    users[socket.id] = avatarData;
    console.log('현재 접속자 아바타 목록:', users);

    // 접속자 아바타 목록 전체를 모두에게 보냄
    io.emit('users update', users);
  });

  // 채팅 메시지 받으면 모두에게 전달
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // 접속 종료 시 접속자 목록에서 제거 후 업데이트
  socket.on('disconnect', () => {
    console.log('유저 접속 종료:', socket.id);
    delete users[socket.id];
    io.emit('users update', users);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
