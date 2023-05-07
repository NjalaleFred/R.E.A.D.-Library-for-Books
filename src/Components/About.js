import React from "react";

export const About = () => {
  return (
    <div id="bio">
      <h1>Welcome to "R.E.A.D. - Library for Books"!</h1>
      <p>
        We here at the R.E.A.D. (Realtime Electronic Access Display) truly
        believe in our motto that 'Reading Is Fundamental'. That is why we have
        set up this lovely application to not only make obtaining books online
        easier, but to encourage it.
      </p>
      <div>
        In this application, you can:
        <ol>
          <li>
            Search for your favourite books in our vast database ranging from
            fiction to mystery to horror and beyond.
          </li>
          <li>
            Add any and all books of your choice that you believe deserve a
            spotlight in our database so others may borrow it.
          </li>
          <li>
            Borrow all the books you want at a time and receieve a due date that
            is three days past the borrowing date.
          </li>
        </ol>
      </div>
      <div>
        <p>
          To get started, you may use the search and filter form below to find a
          book you desire.
        </p>
        <p>
          Alternatively, you may click the "Home" button above to navigate to
          our list of books
        </p>
        <p>
          You may also borrow a book or add a new one using the respective
          buttons in the navigation bar
        </p>
        <p>We hope you have a fun time here! :D</p>
      </div>
    </div>
  );
};
