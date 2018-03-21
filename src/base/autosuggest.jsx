import React from 'react';
import PropTypes from 'prop-types';
import AutosuggestRaw from 'react-autosuggest';

const getSuggestions = (value, allSuggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === allSuggestions ? [] : allSuggestions.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className="test-suggestion">
    {suggestion.name}
  </div>
);

const theme = {
  container: 'dropdown test-autosuggest',
  suggestionsContainer: 'dropdown-menu w-100',
  suggestionsContainerOpen: 'show',
  suggestionsList: 'p-0 m-0',
  suggestionHighlighted: 'text-primary test-is-active',
  suggestion: 'dropdown-item',
};

export class Autosuggest extends React.Component {
  static defaultProps = {
    value: '',
    suggestions: [],
    onChange: null,
  };

  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.array,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.suggestions),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    if (this.props.onChange) {
      this.props.onChange(suggestion);
    }
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      className: 'form-control test-input',
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange,
    };

    return (
      <AutosuggestRaw
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
        alwaysRenderSuggestions
      />
    );
  }
}
