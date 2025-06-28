function User(props){
    const { cardInfo } = props;
    const text=`Hi I am a ${cardInfo} Car`;
  return(
    <h2>{text}</h2>
  );
}

export default User;