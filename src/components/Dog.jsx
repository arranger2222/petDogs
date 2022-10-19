export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <img src={url} alt="dog" width={'350px'} />
      <div>
        <p>Name: {name}</p>
        <p>Bred for: {bred_for}</p>
        <p>Name: {temperament}</p>
      </div>
    </div>
  );
};
