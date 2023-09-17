import { useSelector, useDispatch } from 'react-redux';
import { addConventionMessage } from '../features/chatSlice';


export default function SocketIOListener() {
    const socket = useSelector((state) => state?.user?.socket);
    const dispatch = useDispatch()
    if (socket) {
        socket.on('connect', () => {
            console.log('connected');
        });
        socket.on('connect_error', err => {
            console.log(err.message);
        });
        socket.on('chat', data => {
            console.log({ "chat": data });
            let { conventionId, content, fromUserId, toUserId } = data;
            dispatch(addConventionMessage({ conventionId, content, fromUserId, toUserId }));
        });
    }

    return (<></>);
}
