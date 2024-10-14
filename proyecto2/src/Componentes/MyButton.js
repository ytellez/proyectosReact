import '../index.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

function MyButton({nombre, fecha}) {
    return (
        <>
           <h1>{user.name}</h1>
           <img className='redondo' src={user.imageUrl}/>
        </>
    );
}

export default MyButton;