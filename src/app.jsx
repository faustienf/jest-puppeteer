import React from 'react';

import { Autosuggest } from './base';

const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'C#',
    year: 2000,
  },
  {
    name: 'C++',
    year: 1983,
  },
  {
    name: 'Clojure',
    year: 2007,
  },
  {
    name: 'Elm',
    year: 2012,
  },
  {
    name: 'Go',
    year: 2009,
  },
  {
    name: 'Haskell',
    year: 1990,
  },
  {
    name: 'Java',
    year: 1995,
  },
  {
    name: 'Javascript',
    year: 1995,
  },
  {
    name: 'Perl',
    year: 1987,
  },
  {
    name: 'PHP',
    year: 1995,
  },
  {
    name: 'Python',
    year: 1991,
  },
  {
    name: 'Ruby',
    year: 1995,
  },
  {
    name: 'Scala',
    year: 2003,
  },
];

export function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div className="card mt-5">
            <div className="card-body">
              <h4 className="card-title">Language</h4>

              <Autosuggest suggestions={languages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
