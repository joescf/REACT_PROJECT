let logMixin = {
      _log: function(methodName, args) {
        console.log(this.name + "::" + methodName, args);
      },
      componentWillUpdate: function() {
        this._log("componentWillUpdate", arguments);
      },
      componentDidUpdate: function() {
        this._log("componentDidUpdate", arguments);
      },
      componentWillMount: function() {
        this._log("componentWillMount", arguments);
      },
      componentDidMount: function() {
        this._log("componentDidMount", arguments);
      },
      componentWillUnmount: function() {
        this._log("componentWillUnmount", arguments);
      },
      shouldComponentUpdate(nextProps, nextState_ignore) {
        return nextProps.count !== this.props.count;
      },
    };

    let TextAreaCounter = React.createClass({
      name: "TextAreaCounter",
      // mixins: [logMixin],
      propTypes: {
        defaultValue: React.PropTypes.string
      },
      componentWillReceiveProps: function(newProps) {
        this.setState({
          text: newProps.defaultValue,
        });
      },
      getInitialState: function() {
        return {
          defaultValue: this.props.defaultValue,
        };
      },
      _textChange: function(ev) {
        this.setState({
          defaultValue: ev.target.value,
        });
      },
        propTypes: {
          defaultValue: React.PropTypes.string,
        },
      getDefaultProps: function() {
        return {
          defaultValue: "",
      };
    },
      render: function() {
        console.log(this.name + "::render()");
        let counter = null;
        if (this.state.defaultValue.length > 0) {
          counter = React.DOM.h3(null,
            React.createElement(Counter, {
              count: this.state.defaultValue.length,
            })
          );
        }
        return React.DOM.div(null,
          React.DOM.textarea({
            value: this.state.text,
            onChange: this._textChange,
          }),
          counter
        );
      }
  });

    let Counter = React.createClass({
      name: "Counter",
      // mixins: [logMixin],
      propTypes: {
        count: React.PropTypes.number.isRequired,
      },
      render: function() {
        console.log(this.name + "::render()");
        return React.DOM.span(null, this.props.count);
      }
    });

      let myTextAreaCounter = ReactDOM.render(
        React.createElement(TextAreaCounter, {
          defaultValue: "",
        }),
        document.getElementById("app")
      );








