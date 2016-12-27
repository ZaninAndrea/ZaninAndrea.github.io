"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    if (localStorage.getItem("_prefix_recipes") !== null) {
      _this.state = { selected: "", recipes: JSON.parse(localStorage.getItem("_prefix_recipes")) };
    } else {
      _this.state = { selected: "", recipes: [{ Id: "0", Name: "Pumpkin Pie", Ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"], Show: true }, { Id: "1", Name: "Spaghetti", Ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"], Show: true }, { Id: "2", Name: "Onion Pie", Ingredients: ["Onion", "Pie Crust"], Show: true }] };
    }
    return _this;
  }

  Main.prototype.render = function render() {
    var _this3 = this;

    var toRender = this.state.recipes.map(function (data) {
      var _this2 = this;

      if (data.Show) {
        return React.createElement(
          "div",
          { className: "panel panel-success" },
          React.createElement(
            "div",
            { className: "panel-heading", role: "tab", id: "heading" + data.Id },
            React.createElement(
              "h4",
              { className: "panel-title" },
              React.createElement(
                "a",
                { role: "button", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapse" + data.Id, "aria-expanded": "true", "aria-controls": "collapse" + data.Id },
                data.Name
              )
            )
          ),
          React.createElement(
            "div",
            { id: "collapse" + data.Id, className: "panel-collapse collapse", role: "tabpanel", ariaLabelledby: "heading" + data.Id },
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement(
                "h3",
                { className: "ingredients" },
                "Ingredients"
              ),
              React.createElement(
                "ul",
                { className: "list-group" },
                data.Ingredients.map(function (ingredient) {
                  return React.createElement(
                    "li",
                    { className: "list-group-item" },
                    ingredient
                  );
                })
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-danger", onClick: function onClick() {
                    function arrayObjectIndexOf(myArray, searchTerm, property) {
                      for (var i = 0, len = myArray.length; i < len; i++) {
                        if (myArray[i][property] === searchTerm) return i;
                      }
                      return -1;
                    }
                    var index = arrayObjectIndexOf(_this2.state.recipes, data.Id, "Id");
                    var newRecipes = JSON.parse(JSON.stringify(_this2.state.recipes));
                    newRecipes[index] = { Id: data.Id, Name: data.Name, Ingredients: data.Ingredients, Show: false };
                    localStorage.setItem("_prefix_recipes", JSON.stringify(newRecipes));
                    _this2.setState({ recipes: newRecipes });
                  }
                },
                "Delete"
              ),
              " ",
              React.createElement(
                "button",
                { type: "button", className: "btn btn-info", "data-toggle": "modal", "data-target": "#modal" + data.Id },
                "Edit"
              ),
              React.createElement(
                "div",
                { className: "modal fade", id: "modal" + data.Id, role: "dialog" },
                React.createElement(
                  "div",
                  { className: "modal-dialog" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement(
                        "h4",
                        { className: "modal-title" },
                        "Edit Recipe"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body" },
                      React.createElement(
                        "b",
                        null,
                        "Recipe Name"
                      ),
                      React.createElement("input", { className: "form-control", type: "text", defaultValue: data.Name, id: "InputName" + data.Id }),
                      React.createElement("br", null),
                      React.createElement(
                        "b",
                        null,
                        "Ingredients "
                      ),
                      React.createElement(
                        "p",
                        { className: "explain" },
                        "(the ingredients should be separated by a comma and a space, ie. Milk, Eggs)"
                      ),
                      React.createElement("textarea", { className: "form-control", type: "text", defaultValue: data.Ingredients.join(", "), id: "InputIngredients" + data.Id })
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        { type: "button", className: "btn btn-info", "data-dismiss": "modal", onClick: function onClick() {
                            function arrayObjectIndexOf(myArray, searchTerm, property) {
                              for (var i = 0, len = myArray.length; i < len; i++) {
                                if (myArray[i][property] === searchTerm) return i;
                              }
                              return -1;
                            }
                            var index = arrayObjectIndexOf(_this2.state.recipes, data.Id, "Id");
                            var newRecipes = JSON.parse(JSON.stringify(_this2.state.recipes));
                            newRecipes[index] = { Id: data.Id, Name: document.getElementById("InputName" + data.Id).value, Ingredients: document.getElementById("InputIngredients" + data.Id).value.split(", "), Show: true };
                            localStorage.setItem("_prefix_recipes", JSON.stringify(newRecipes));
                            _this2.setState({ recipes: newRecipes });
                          } },
                        "Edit Recipe"
                      ),
                      React.createElement(
                        "button",
                        { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                        "Close"
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }.bind(this));

    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true" },
          toRender
        )
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-info", "data-toggle": "modal", "data-target": "#addmodal", onClick: function onClick() {
            document.getElementById("AddInputName").value = "";
            document.getElementById("AddInputIngredients").value = "";
          } },
        "Add Recipe"
      ),
      React.createElement(
        "div",
        { className: "modal fade", id: "addmodal", role: "dialog" },
        React.createElement(
          "div",
          { className: "modal-dialog" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Edit Recipe"
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              React.createElement(
                "b",
                null,
                "Recipe Name"
              ),
              React.createElement("input", { className: "form-control", type: "text", id: "AddInputName" }),
              React.createElement("br", null),
              React.createElement(
                "b",
                null,
                "Ingredients "
              ),
              React.createElement(
                "p",
                { className: "explain" },
                "(the ingredients should be separated by a comma and a space, ie. Milk, Eggs)"
              ),
              React.createElement("textarea", { className: "form-control", type: "text", id: "AddInputIngredients" })
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                { type: "button", className: "btn btn-info", "data-dismiss": "modal", onClick: function onClick() {
                    var newRecipes = JSON.parse(JSON.stringify(_this3.state.recipes));
                    newRecipes.push({ Id: newRecipes.length.toString(), Name: document.getElementById("AddInputName").value, Ingredients: document.getElementById("AddInputIngredients").value.split(", "), Show: true });
                    localStorage.setItem("_prefix_recipes", JSON.stringify(newRecipes));
                    _this3.setState({ recipes: newRecipes });
                  } },
                "Add Recipe"
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                "Close"
              )
            )
          )
        )
      )
    );
  };

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('container'));