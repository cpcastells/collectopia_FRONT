# Collectopia App

## Data layer

### Data Boardgame

- Collection of Boardgames
  - Boardgame:
    - id: number
    - name: string
    - image: string
    - category: string
    - Mechanics: string
    - players: {min: number, max: number}
    - duration: number
    - price: number
    - author: string
    - releaseYear: number
    - user: ObjectId

### Modifications

- addBoardgame()
- removeBoardgame()
- updateBoardgame()
- loadBoardgames()

### Data User

- User:
  - id: string
  - username: string
  - token: string
  - isLogged: boolean

### Modifications

- loginUser()
- logoutUser()

### Data UI

- UI:
  - isLoading: boolean
  - isError: boolean
  - modalMessage: string
  - modalTitle: string
  - modalImage: string (or if vector, react component)

### Modifications

- showLoading()
- hideLoading()
- showModal()
- hideModal()

## Components

### Store

#### State

- Collection of Boardgames

#### BoardgamesReducer

- addBoardgame()
- removeBoardgame()
- updateBoardgame()
- loadBoardgames()

#### State

- User

#### UserReducer

- loginUser()
- logoutUser()

#### State

- UI

#### UiReducer

- showLoading()
- hideLoading()
- showError()
- hideError()

### App

- Renders a layout
- Receives a token from the local storage

### Layout

- Renders a header
- Renders a routed page

### Header

- Renders a logo
- Renders a NavBar component

### NavBar

- Renders multiple Button components with navigation links
  - "Logout"
  - "Home"
  - "Add Boardgame"

### BoardgameForm

- State:
  - Boardgame
- handleSubmit()
- Receives submiForm from page form
- Receives dispatch()
- Receives an optional Boardgame to update
- Show multiple labels and the corresponding inputs for the Boardgame
- Shows a dropdown select menu for the category and mechanics
- Renders a Button component
  - text: "Create" / "Edit"
  - actionOnClick: handleSubmit

### LoginForm

- State:
  - UserCredentials
- Receives submitLoginForm() from Props
- handleLoginSubmit()
- Receives dispatch()
- Shows an input text for the username and password of the User
- Renders a Button component
  - text: "Login"
  - actionOnClick: handleSubmit

### BoardgamesList

- Receives a collection of Boardgames
- Renders as many BoardgameCard as Boardgames are in the collection

### BoardgameCard

- Receives a Boardgame
- Receives dispatch()
- handleClick()
- Shows the Boardgame's title, image, category, and description
- Renders two Button components with:
  - text: "delete" / "edit"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### Feedback

- Receives modalImage, modalTitle and modalMessage from props
- Renders the modal

### Pagination

- Handles page navigation
- "Load more"

### Filters

- Receives the list of categories¿?
- Filters Boardgames without changing page

### Pages

- Login

  - Receives setLocalStorageToken() (useLocalStorage)
  - Receives getUserToken() (useUser)
  - Receives decodeToken() (useToken)
  - Receives dispatch - (loginUserActionCreator)
  - navigate(/boardgames) (useNavigate)
  - submitForm()

  - Renders a logo
  - Renders a title
  - Renders LoginForm

- 404

  - Renders a title
  - Renders an image

- List

  - Receives a collection of Boardgames
  - Receives dispatch()
  - Shows the title 'My collection'
  - Renders a Filter component
  - Renders BoardgamesList

- Add Item (Form)

  - submitForm()
  - navigate(/boardgames)
  - Renders BoardgameForm

- Detail
  - Receives the id of the Boardgame from the URL
  - Receives dispatch() (updateBoardgameActionCreator() / deleteBoardgameActionCreator())
  - Calls the API for a specific Boardgame
  - Renders title, image and data info.
  - Renders two Button components with "Delete" and "Edit" text
