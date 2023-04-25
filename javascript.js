* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: "Segoe UI", Roboto, sans-serif, monospace;
  }
  
  html,
  body {
    height: 100%;
    margin: 0;
  }
  
  body {
    display: flex;
    align-items: center;
    color: #212529;
    background-color: #ffd54f;
    font-weight: 300;
  }
  
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
  }
  
  .date {
    font-size: 3rem;
  }
  
  .day-name {
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
  }
  
  .day {
    letter-spacing: 0.3em;
    margin-right: -0.3em;
  }
  
  .clock {
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 400;
    gap: 5rem;
  }
  
  .clock-col {
    text-align: center;
  }
  
  .clock-label {
    gap: 11rem;
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .container--btn {
    display: flex;
    flex: row;
    align-items: end;
    justify-content: center;
    gap: 1rem;
    font-size: 1.25rem;
  }
  
  .btn {
    display: block;
    width: 50px;
    height: 25px;
    background-color: #fff;
    border-radius: 100px;
    cursor: pointer;
    position: relative;
  }
  
  .btn::before {
    position: absolute;
    content: "";
    background-color: #4f79ff;
    width: 22.5px;
    height: 22.5px;
    margin: 1.25px;
    border-radius: 100px;
    transition: 0.3s;
  }
  
  input:checked + .btn::before {
    transform: translateX(25px);
  }
  
  .grid--3-col {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid--4-col {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  
  .hidden {
    display: none;
  }

  button {
    background-color: #4f79ff;
    color: white;
    display: flex;
    flex: row;
    align-items: end;
    justify-content: center;
    gap: 1rem;
    font-size: 1.25rem;
    border: white;
    padding: 5px;
    border-radius: 15px 15px ;
  }
