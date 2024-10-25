

// React component functions accept a single argument, a props object:
function Avatar2(props) {
    let person = props.person;
    let size = props.size;
    // ...
}
// передача обєкта а потів спреад оператор до нього 
// чо робить він тут це розбиває об'єкт на ключ=значення
function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props} />
      </div>
    );
  }


function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
// це деструкція обєїкта в аватарі апросто а не чото інше 
function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Avatar
          size={50}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </div>
    );
  }

// When you nest content inside a JSX tag, the parent 
// component will receive that content in a prop called children. 
// For example, the Card component below will receive a children prop set to 
// <Avatar /> and render it in a wrapper div: 
<Card>
  <Avatar />
</Card>

export function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}

function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }
  
// example
  function Profile({ person, imageSize = 70 }) {
    const imageSrc = getImageUrl(person)
  
    return (
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={imageSrc}
          alt={person.name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession:</b> {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>
            ({person.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
      </section>
    )
  }

  export default function Gallery() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile person={{
          imageId: 'szV5sdG',
          name: 'Maria Skłodowska-Curie',
          profession: 'physicist and chemist',
          discovery: 'polonium (chemical element)',
          awards: [
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ],
        }} />
        <Profile person={{
          imageId: 'YfeOqp2',
          name: 'Katsuko Saruhashi',
          profession: 'geochemist',
          discovery: 'a method for measuring carbon dioxide in seawater',
          awards: [
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
          ],
        }} />
      </div>
    );
  }

//another example
function Card({ children }) {
    return (
      <div className="card">
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Card>
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
          />
        </Card>
        <Card>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </Card>
      </div>
    );
  }