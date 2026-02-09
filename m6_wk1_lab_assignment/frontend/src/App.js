import React from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          id: "",
          title: "",
          author: ""
        }
      };
    }

    getLists = () => {
      fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((result) => {
          this.setState({ 
            loading: false,
            alldata: result 
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    createList = () => {
      const createData = {
        title: this.state.singledata.title,
        author: this.state.singledata.author
      };

      fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createData),
      })
      .then(res => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            id: "",
            title: "",
            author: ""
          }
        });
        this.getLists();
      })
      .catch((error) => {
        console.error("Error creating list:", error);
      });
    };

    handleChange = (event) => {
      let id = this.state.singledata.id;
      let title = this.state.singledata.title;
      let author = this.state.singledata.author;

      if (event.target.name === "title") { title = event.target.value; }
      else if (event.target.name === "author") { author = event.target.value; }

      this.setState({
        singledata: {
          id: id,
          title: title,
          author: author
        }
      });
    };

    getList =(event, id) => {
      this.setState({
        singledata: {
          id: id,
          title: "Loading...",
          author: "Loading..."
        }
      },
      () => {
          fetch(`http://localhost:5000/posts/${id}`)
            .then((res) => res.json())
            .then((result) => {
              this.setState({
                singledata: {
                  id: result.id,
                  title: result.title,
                  author: result.author ? result.author : ""
                }
              });
            });
        }
      );
    }

    updateList = (event,id) => {
      const updateData = {
        title: this.state.singledata.title,
        author: this.state.singledata.author
      };

      fetch(`http://localhost:5000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
      .then( res => res.json())
      .then( (result) => {
        this.setState({
          singledata: {
            id: "",
            title: "",
            author: ""
          }
        });
        this.getLists();
      })
      .catch((error) => {
        console.error("Error updating list:", error);
      });
    };

    deleteList = (event, id) => {
      fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      })
      .then( res => res.json())
      .then( (result) => {
        this.setState({
          singledata: {
            id: "",
            title: "",
            author: ""
          }
        });
        this.getLists();
      })
      .catch((error) => {
        console.error("Error deleting list:", error);
      });
    };

    render() {
      const listTable = this.state.loading ? (
        <span>Loading Data ... Please be patient...</span>
      ) : (
        <Lists 
          alldata={this.state.alldata} 
          singledata={this.state.singledata}
          getList={this.getList}
          updateList={this.updateList}
          deleteList={this.deleteList}
          handleChange={this.handleChange}
        />
      );
      return (
        <div className="container">
          <span className="title-bar">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={this.getLists}
            >
              Get Lists
            </button>
            <CreateList 
                singledata={this.state.singledata} 
                handleChange={this.handleChange}
              createList={this.createList}
            />
          </span>
          {listTable}
        </div>
      );
    }
  }

export default App;