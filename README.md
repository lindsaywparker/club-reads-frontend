## Club Reads - Turing Mod 4 FEE Capstone Project
A site for book club members to suggest books, vote, and see what the club is currently reading and what has been read in the past.

### Background / About
Suggesting and selecting quality books is a critical task for any book club (second only to buying sufficient wine).  Limited applications exist to facilitate this process, and none includes information on each book from every book-lovers favorite website, [Goodreads](https://www.goodreads.com/).  Once logged in, a member can search on the 'Suggest a Book' page and see the associated results from Goodreads.  When books are suggested, they are added to the 'Club Page,' where members can vote up or down on each book and have the app track the totals.  On the first of each month, the club's next book is automatically selected from the club's suggested books by grabbing the book with the highest number of upvotes. 

### See It Live
[Club Reads](https://club-reads.herokuapp.com/) on Heroku

### APIs Used
- Goodreads API
- Club Reads API

### Primary JavaScript Technologies Used
- React
- React Router
- Node.js
- Express
- Node Schedule

### Next Steps
Additional enhancements could include:
- Incorporate OAuth to display user's and their network's Goodreads ratings
- Add admin rights and associated functionality for managing a club
- Display description, prices, and genres
- Display availability at a local library
- Allow users to create new clubs
- Provide recommended books based on a club's reading history
- Incorporate calendar and comments sections
- Display a book's recommended reading rate based on the length of a book
- Allow clubs to specify how often they meet
- Provide a text input for a user to provide a background or reason for suggesting a book
- Display which members have voted on which books

### Screenshots

#### Club Page:
![club-reads_club-page](https://user-images.githubusercontent.com/20492875/30620618-b337c5ce-9d63-11e7-925b-d3f878094068.png)

#### Suggest a Book:
![club-reads_suggest-page](https://user-images.githubusercontent.com/20492875/30620617-b12e609e-9d63-11e7-9fec-1ce8188903cb.png)

### Set Up
#### Front-end

Clone the repo

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

#### Back-end
Clone the associated [back-end repo](https://github.com/buji405/club-reads-backend)

Run `npm install` from the root directory

Run `node server.js`

### Test Driven Development
Club Reads uses Jest and Enzyme for front-end testing, and Mocha and Chai for back-end testing

Run with `npm test` from the associated root directory

### Original Assignment

[Capstone Project](http://frontend.turing.io/projects/capstone.html) from the Turing School of Software & Design

### Contributors

[Ciara Bujanos](https://github.com/buji405)

[Travis Gregory](https://github.com/tlgreg86)

[Lindsay Parker](https://github.com/lindsaywparker)

[Dave Weinstock](https://github.com/dstock48)
