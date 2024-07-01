/* styles.css */
body > h1{
    text-align: center;
}
#board{
    align-items: center;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 5px;
    margin-bottom: 20px;
    /* Center the grid horizontally */
    justify-content: center;
    /* Center the grid vertically */
    align-items: center;
}


.cell {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    cursor: pointer;
}

.status {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.restart-button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}
.restart-button-container {
    display: flex;
    justify-content: center; /* Center the button horizontally */
}
