import { keyframes } from 'styled-components';

const ChatKeyFrames = keyframes`
  0% { opacity: 0; transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  7.61% { transform: matrix3d(0.768, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  11.41% { transform: matrix3d(0.869, 0, 0, 0, 0, 0.869, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  15.12% { transform: matrix3d(0.941, 0, 0, 0, 0, 0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.92% { transform: matrix3d(0.99, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  22.72% { transform: matrix3d(1.019, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  30.23% { opacity: 1;transform: matrix3d(1.036, 0, 0, 0, 0, 1.036, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50.25% { transform: matrix3d(1.008, 0, 0, 0, 0, 1.008, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  70.27% { transform: matrix3d(0.998, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
`;

export default ChatKeyFrames;
