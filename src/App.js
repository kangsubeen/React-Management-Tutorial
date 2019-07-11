import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201904%2F20190418150724431.jpg',
    'name': '황민현',
    'birthday': '950809',
    'gender': '남자',
    'job': "NU'EST"
  },
  {
    'id': 2,
    'image': 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201901%2F20190117122557308.jpg',
    'name': '옹성우',
    'birthday': '950824',
    'gender': '남자',
    'job': 'Actor'
  },
  {
    'id': 3,
    'image': '2w3https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F22%2F201712261720546481.jpg',
    'name': '이한결',
    'birthday': '991207',
    'gender': '남자',
    'job': 'IM'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
          />
          )
        })
      }
    </div>
  );
}

export default App;