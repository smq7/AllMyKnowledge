// саме главне статус може називатись як небудь
// це функція прпинімає цю проп тіпа як і children і інші це ми просто даємо сразу
// значення цій властивості
export default function Form({
    // Try 'submitting', 'error', 'success':
    // status = 'error'
    vadim = 'error'
  }) {
    if (vadim === 'success') {
      return <h1>That's right!</h1>
    }
    return (
      <>
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable water?
        </p>
        <form>
          <textarea disabled={
            vadim === 'submitting'
          } />
          <br />
          <button disabled={
            vadim === 'empty' ||
            vadim === 'submitting'
          }>
            Submit
          </button>
          {vadim === 'error' &&
            <p className="Error">
              Good guess but a wrong answer. Try again!
            </p>
          }
        </form>
        </>
    );
  }
// 
export function Form2({status}){}
// example 
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
// 
import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}