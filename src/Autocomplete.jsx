import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Automcomplete.css";

export class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };
  static defaultProperty = {
    suggestions: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentSuggestion: 0,
      filteredSuggestion: [],
      isShow: false,
      userInput: "",
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestion = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      currentSuggestion: 0,
      filteredSuggestion,
      isShow: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      currentSuggestion: 0,
      filteredSuggestion: [],
      isShow: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { currentSuggestion, filteredSuggestion } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        currentSuggestion: 0,
        isShow: false,
        userInput: filteredSuggestion[currentSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (currentSuggestion === 0) {
        return;
      }

      this.setState({ currentSuggestion: currentSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (currentSuggestion - 1 === filteredSuggestion.length) {
        return;
      }

      this.setState({ currentSuggestion: currentSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { currentSuggestion, filteredSuggestion, isShow, userInput },
    } = this;
    let suggestionsListComponent;
    if (isShow && userInput) {
      if (filteredSuggestion.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestion.map((suggestion, index) => {
              let className;

              if (index === currentSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            className="searchTerm"
            placeholder="Which place are you looking for?"
          />
        </div>
        {suggestionsListComponent}
        <button onClick={(e) => this.props.clickHandle(this.state.userInput)}>
          Search
        </button>
      </React.Fragment>
    );
  }
}

export default Autocomplete;
