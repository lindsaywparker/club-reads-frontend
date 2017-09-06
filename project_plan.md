## Project Name: "Club Reads"

#### Project Pitch 
A site for book club members to suggest books to be read, vote on them, see what they're reading next, and see what they've read in the past.

### Deliverables  

#### Stack:
 - React
 - Node.js
 - Express
 - Mocha/Chai testing

#### APIs:  
[Goodreads](https://www.goodreads.com/api/)

#### Wireframes (or Inspiration?) 
tbd
<!-- ![alt text](https://github.com/lindsaywparker/back-home/blob/master/comps/comp-summary.png "Back Home Static Comps") -->

#### Waffle & Github
[Waffle](https://waffle.io/lindsaywparker/club-reads)

[GitHub](https://github.com/lindsaywparker/club-reads)

#### MVP
A user should be able to suggest a book from a Goodreads-linked search, vote on the club's suggestions, and view the club's selected books.  Users can post messages to the page.

#### Order Of Attack
##### Iteration 0 - Back-end
  - [ ] Create tables in the back-end
  - [ ] Finalize back-end paths
  
##### Iteration 1 - Login & Logout
  - [ ] `/` should render a login/signup form
  - [ ] When `login` is clicked with valid credentials, redirect to `/:club_name`
  - [ ] When `login` is clicked with invalid credentials, display error message
  
##### Iteration 2 - Sign-up
  - [ ] When `signup` is clicked, redirect to `/signup`
  - [ ] On signup page, when `signup` is clicked with the necessary fields, redirect to associated club page
  - [ ] On signup page, when `signup` is clicked with missing or invalid fields, display error message
  
##### Iteration 3 - Suggest
  - [ ] Page should only be available to logged in members
  - [ ] `/suggestbook` should render a search field
  - [ ] Clicking `search` should render the fuzzy results of the search below the search bar
  - [ ] Each result should include a `suggest` button and a link to the book's Goodreads page
  - [ ] When `suggest` is clicked, the book should be added to the Books table
  
##### Iteration 4 - Club Page: Suggestions
  - [ ] Suggestions area should have a title of some sort explaining what to do
  - [ ] `/:club_name` should render a grid of current suggested books with:
    - Name
    - Author
    - Cover image
    - Description
    - Goodreads rating
    - `View on Goodreads` link
    - Upvote & Downvote buttons
  - [ ] Clicking `upvote` and `downvote` should increment the appropriate counter
  - [ ] Voting should only be available to logged in members
   
##### Iteration 5 - Club Page: Comments   
  - [ ] Should render a text input with a submit button
  - [ ] Clicking the comment submit button should post to the Comments table with the user's email and message
  - [ ] A new message should be rendered to the DOM
  - [ ] Messages should persist
  - [ ] Messages should only be visible to a member that is logged in

##### Iteration 6 - Club Page: Carousel   
  - [ ] Should render the club's book history
  - [ ] Should render the club's current book
  - [ ] Should render the club's future books
  - [ ] Cards should display:
    - Name
    - Author
    - Cover image
    - Description
    - Goodreads rating
    - `View on Goodreads` link
  
#### Nice To Haves
  - Admin rights can delete books from suggestions so they won't be voted on
  - Submit a book and get the description, ratings, prices, genres on the same page
  - Click on a book and link to Goodreads
  - Availability button that links to library or stores
  - Search feature to view past/future books (fuzzy?)
  - Add Book club groups
  - Pull in a users ratings from Goodreads (OAuth)
  - Popular/recommended books
  - Calendar
  - Recommended reading rate
  - Update how frequently the club meets
  - Vote on recommendations to move into the queue => upvote/downvote
  - Chat window for non-local clubs
  - Person suggesting books adds a quick background or reason why
  - Show who has voted for what
  - Progressive Web App
  - Sort suggestions by voting results
  - Creativity => Build in Vue
  - Creativity => Individual backgrounds pull from book covers
  - Creativity => Send emails from the app
 