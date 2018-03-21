import React from 'react';

import { Autosuggest } from '../base';
import languages from '../fixtures/languages.json';

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
