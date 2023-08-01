document.addEventListener('DOMContentLoaded', () => {
      const userGrid = document.querySelector('.grid-user')
      const computerGrid = document.querySelector('.grid-computer')
      const displayGrid = document.querySelector('.grid-display')
      const ships = document.querySelectorAll('.ship')
      const destroyer = document.querySelector('.destroyer-container')
      const submarine = document.querySelector('.submarine-container')
      const cruiser = document.querySelector('.cruiser-container')
      const battleship = document.querySelector('.battleship-container')
      const carrier = document.querySelector('.carrier-container')
      const startButton = document.querySelector('#start', 'start')
      const rotateButton = document.querySelector('#rotate')
      const turnDisplay = document.querySelector('#whose-go')
      const infoDisplay = document.querySelector('#info')
      const userSquares = []
      const computerSquares = []
      let isHorizontal = true
      let isGameOver = false
      let currentPlayer = 'user'
      const width = 10

      /* Ships */
      const shipArray = [
        // Define an array of ship objects
        {
          name: 'destroyer', // Ship name
          directions: [ // Array of arrays defining each ship's possible directions
            [0, 1], // Horizontal direction
            [0, width] // Vertical direction
          ]
        },
        {
          name: 'submarine',
          directions: [
            [0, 1, 2], // Horizontal direction
            [0, width, width * 2] // Vertical direction
          ]
        },
        {
          name: 'cruiser',
          directions: [
            [0, 1, 2],
            [0, width, width * 2]
          ]
        },
        {
          name: 'battleship',
          directions: [
            [0, 1, 2, 3],
            [0, width, width * 2, width * 3]
          ]
        },
        {
          name: 'carrier',
          directions: [
            [0, 1, 2, 3, 4],
            [0, width, width * 2, width * 3, width * 4]
          ]
        },
      ]

      /* Create Board */
      function createBoard(grid, squares) {
        // Loop through the number of squares we need based on width value
        for (let i = 0; i < width * width; i++) {
          // Create a new div element to represent the square
          const square = document.createElement('div')
          // Assign the index of the square to its dataset ID property
          square.dataset.id = i
          // Add the square to the grid
          grid.appendChild(square)
          // Add the square to our array of squares
          squares.push(square)
        }
      }

      // Call the createBoard function for both user and computer grids
      createBoard(userGrid, userSquares)
      createBoard(computerGrid, computerSquares)

      /* Draw the computers ships in random locations */
      function generate(ship) {
        // Pick a random direction for the ship
        let randomDirection = Math.floor(Math.random() * ship.directions.length)
        // Get the current direction based on the randomly chosen direction
        let current = ship.directions[randomDirection]
        // Set the direction based on the current direction
        if (randomDirection === 0) direction = 1
        if (randomDirection === 1) direction = 10
        // Generate a random starting position for the ship
        let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

        // Check if any of the squares the ship will occupy are already taken by another ship
        const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
        // Check if any of the squares the ship will occupy are at the right edge of the board
        const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
        // Check if any of the squares the ship will occupy are at the left edge of the board
        const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)

        // If the squares the ship will occupy are not taken and are not at the edges of the board, mark them as taken
        if (!isTaken && !isAtRightEdge && !isAtLeftEdge) {
          current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))
        }
        // If the squares are taken or at the edges of the board, generate a new starting position for the ship
        else {
          generate(ship)
        }
      }

      // Generate the computers ships in random locations
      generate(shipArray[0])
      generate(shipArray[1])
      generate(shipArray[2])
      generate(shipArray[3])
      generate(shipArray[4])

      /* Rotate the ships */
      // function to rotate the ships
      function rotate() {
        // check if the ships are currently horizontal
        if (isHorizontal) {
          // toggle the vertical class for each ship to rotate them
          destroyer.classList.toggle('destroyer-container-vertical')
          submarine.classList.toggle('submarine-container-vertical')
          cruiser.classList.toggle('cruiser-container-vertical')
          battleship.classList.toggle('battleship-container-vertical')
          carrier.classList.toggle('carrier-container-vertical')
          // set isHorizontal to false since the ships are now vertical
          isHorizontal = false
          console.log(isHorizontal)
          return
        }
        // if ships are vertical, toggle back to horizontal by removing the vertical classes
        if (!isHorizontal) {
          destroyer.classList.toggle('destroyer-container-vertical')
          submarine.classList.toggle('submarine-container-vertical')
          cruiser.classList.toggle('cruiser-container-vertical')
          battleship.classList.toggle('battleship-container-vertical')
          carrier.classList.toggle('carrier-container-vertical')
          // set isHorizontal to true since the ships are now horizontal
          isHorizontal = true
          console.log(isHorizontal)
          return
        }
      }

      // add event listener to the rotate button to call the rotate function when clicked
      rotateButton.addEventListener('click', rotate)


      /* Move around user ship */
      // Add dragstart event listener to all ships
      ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
      // Add dragstart event listener to all user squares
      userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
      // Add dragover event listener to all user squares
      userSquares.forEach(square => square.addEventListener('dragover', dragOver))
      // Add dragenter event listener to all user squares
      userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
      // Add dragleave event listener to all user squares
      userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
      // Add drop event listener to all user squares
      userSquares.forEach(square => square.addEventListener('drop', dragDrop))

      // Initialize variables
      let selectedShipNameWithIndex
      let draggedShip
      let draggedShipLength

      // Add mousedown event listener to all ships
      ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
        // Store the selected ship name with index
        selectedShipNameWithIndex = e.target.id
        console.log(selectedShipNameWithIndex)
      }))

      // Handle dragstart event
      function dragStart() {
        // Set the dragged ship to the current element
        draggedShip = this
        // Set the dragged ship length to the number of child nodes
        draggedShipLength = this.childNodes.length
        console.log(draggedShip)
      }

      // Handle dragover event
      function dragOver(e) {
        // Prevent the default dragover behavior
        e.preventDefault()
      }

      // Handle dragenter event
      function dragEnter(e) {
        // Prevent the default dragenter behavior
        e.preventDefault()
      }

      // Handle dragleave event
      function dragLeave() {
        console.log('drag leave')
      }

      // Handle drop event
      function dragDrop() {
        // Get the name of the last child element of the dragged ship
        let shipNameWithLastId = draggedShip.lastChild.id
        // Get the ship class by removing the last two characters of the last child element's id
        let shipClass = shipNameWithLastId.slice(0, -2)
        console.log(shipClass)
        // Get the last index of the ship by getting the last character of the last child element's id
        let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
        // Calculate the id of the last square that the ship will occupy
        let shipLastId = lastShipIndex + parseInt(this.dataset.id)
        console.log(shipLastId)

        // Create arrays of squares that are not allowed for the ship to be placed horizontally or vertically
        const notAllowedHorizontal = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 2, 22, 32, 42, 52, 62, 72, 82, 92, 3, 13, 23, 33, 43, 53, 63, 73, 83, 93]
        const notAllowedVertical = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60]

        let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
        let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)

        selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))

        shipLastId = shipLastId - selectedShipIndex
        console.log(shipLastId)

        // If ship is being dragged horizontally and the last cell id of the ship is not in the newNotAllowedHorizontal array, place the ship on the board.
        if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)) {
          for (let i = 0; i < draggedShipLength; i++) {
            let directionClass
            if (i === 0) directionClass = 'start'
            if (i === draggedShipLength - 1) directionClass = 'end'
            // Add 'taken', 'horizontal', and 'directionClass' CSS classes to the corresponding cells on the board to place the ship horizontally.
            userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', 'horizontal', directionClass, shipClass)
          }
        }
        // If ship is being dragged vertically and the last cell id of the ship is not in the newNotAllowedVertical array, place the ship on the board.
        else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) {
          for (let i = 0; i < draggedShipLength; i++) {
            let directionClass
            if (i === 0) directionClass = 'start'
            if (i === draggedShipLength - 1) directionClass = 'end'
            // Add 'taken', 'vertical', and 'directionClass' CSS classes to the corresponding cells on the board to place the ship vertically.
            userSquares[parseInt(this.dataset.id) - selectedShipIndex + width * i].classList.add('taken', 'vertical', directionClass, shipClass)
          }
        } else return // If the last cell id of the ship is already in the not allowed array, exit the function and don't place the ship.

        // Remove the dragged ship from the display grid.
        displayGrid.removeChild(draggedShip)
        // If there are no more ships left to place, set allShipsPlaced to true.
        if (!displayGrid.querySelector('.ship')) allShipsPlaced = true
      }

      /* Decided to make the Start game button hide until all ships are placed on the board, then disappear again after clicked. */
      // Select the button and grid display elements
      let myButton = document.getElementById("start");
      let gridDisplay = document.querySelector(".grid-display");

      // Hide the button by default
      myButton.style.display = "none";

      // Create a new observer instance
      let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === "childList") {
            // Check if the grid display has any children
            if (gridDisplay.children.length === 0) {
              // Enable the button if the grid display is empty
              myButton.disabled = false;
              // Show the button if it was hidden before
              if (myButton.style.display === "none") {
                myButton.style.display = "inline-block";
              }
            } else {
              // Disable the button if the grid display is not empty
              myButton.disabled = true;
              // Hide the button if it is visible
              if (myButton.style.display !== "none") {
                myButton.style.display = "none";
              }
            }
          }
        });
      });

      // Configure and start the observer
      let config = {
        childList: true
      };
      observer.observe(gridDisplay, config);

      // Add a click event listener to the button
      myButton.addEventListener("click", function () {
        // Hide the button when clicked
        myButton.style.display = "none";
        // Code to start the game
      });

      /* Game Logic */
      function playGame() {
        // Check if the game is over
        if (isGameOver) return

        // If it is the user's turn, display a message and allow them to click on computer squares
        if (currentPlayer === 'user') {
          turnDisplay.innerHTML = 'Your Go'
          computerSquares.forEach(square => square.addEventListener('click', function (e) {
            revealSquare(square)
          }))
        }

        // If it is the computer's turn, display a message and let the computer play after a delay
        if (currentPlayer === 'computer') {
          turnDisplay.innerHTML = 'Computers Go'
          setTimeout(computerGo, 1000)
        }
      }

      // Start the game when the Start button is clicked
      startButton.addEventListener('click', playGame)

      // Declare variables to keep track of the number of ships placed for each type of ship
      let destroyerCount = 0
      let submarineCount = 0
      let cruiserCount = 0
      let battleshipCount = 0
      let carrierCount = 0


      function revealSquare(square) {
        // If the square doesn't already have the class "boom", check if it contains a ship
        if (!square.classList.contains('boom')) {
          if (square.classList.contains('destroyer')) destroyerCount++
          if (square.classList.contains('submarine')) submarineCount++
          if (square.classList.contains('cruiser')) cruiserCount++
          if (square.classList.contains('battleship')) battleshipCount++
          if (square.classList.contains('carrier')) carrierCount++
        }
        // Add the appropriate class to the square based on whether or not it contains a ship
        if (square.classList.contains('taken')) {
          square.classList.add('boom')
        } else {
          square.classList.add('miss')
        }
        // Check for a win and switch to the computer's turn
        checkForWins()
        currentPlayer = 'computer'
        playGame()
      }

      // Initialize counts for the computer's ships
      let cpuDestroyerCount = 0
      let cpuSubmarineCount = 0
      let cpuCruiserCount = 0
      let cpuBattleshipCount = 0
      let cpuCarrierCount = 0

      // Function for the computer's turn
      function computerGo() {
        // Choose a random square on the user grid
        let random = Math.floor(Math.random() * userSquares.length)
        // If the square has not been selected before
        if (!userSquares[random].classList.contains('boom')) {
          // If the selected square is occupied
          if (userSquares[random].classList.contains('taken')) {
            userSquares[random].classList.add('boom')
          } else {
            // If the selected square is not occupied
            userSquares[random].classList.add('miss')
          }
          // Update the ship count for the corresponding ship type
          if (userSquares[random].classList.contains('destroyer')) cpuDestroyerCount++
          if (userSquares[random].classList.contains('submarine')) cpuSubmarineCount++
          if (userSquares[random].classList.contains('cruiser')) cpuCruiserCount++
          if (userSquares[random].classList.contains('battleship')) cpuBattleshipCount++
          if (userSquares[random].classList.contains('carrier')) cpuCarrierCount++
          // Check if the game has been won
          checkForWins()
        } else {
          // If the square has been selected before, choose another square
          computerGo()
        }
        // Switch the current player back to the user and display the "Your Go" message
        currentPlayer = 'user'
        turnDisplay.innerHTML = 'Your Go'
      }

      // The event listener for the start button to begin the game
      startButton.addEventListener('click', () => {
        playGame()
      })

      // Check if either the user or the computer has sunk all of the opponent's ships or not
      function checkForWins() {
        // If the user has sunk the computer's destroyer, update the info display and set destroyerCount to 10
        if (destroyerCount === 2) {
          infoDisplay.innerHTML = 'You sunk the computers destroyer'
          destroyerCount = 10
        }
        // If the user has sunk the computer's submarine, update the info display and set submarineCount to 10
        if (submarineCount === 3) {
          infoDisplay.innerHTML = 'You sunk the computers submarine'
          submarineCount = 10
        }
        // If the user has sunk the computer's cruiser, update the info display and set cruiserCount to 10
        if (cruiserCount === 3) {
          infoDisplay.innerHTML = 'You sunk the computers cruiser'
          cruiserCount = 10
        }
        // If the user has sunk the computer's battleship, update the info display and set battleshipCount to 10
        if (battleshipCount === 4) {
          infoDisplay.innerHTML = 'You sunk the computers battleship'
          battleshipCount = 10
        }
        // If the user has sunk the computer's carrier, update the info display and set carrierCount to 10
        if (carrierCount === 5) {
          infoDisplay.innerHTML = 'You sunk the computers carrier'
          carrierCount = 10
        }
        // If the computer has sunk the user's destroyer, update the info display and set cpuDestroyerCount to 10
        if (cpuDestroyerCount === 2) {
          infoDisplay.innerHTML = 'You sunk the computers Destroyer'
          cpuDestroyerCount = 10
        }
        // If the computer has sunk the user's submarine, update the info display and set cpuSubmarineCount to 10
        if (cpuSubmarineCount === 3) {
          infoDisplay.innerHTML = 'You sunk the computers Submarine'
          cpuSubmarineCount = 10
        }
        // If the computer has sunk the user's cruiser, update the info display and set cpuCruiserCount to 10
        if (cpuCruiserCount === 3) {
          infoDisplay.innerHTML = 'You sunk the computers Cruiser'
          cpuCruiserCount = 10
        }
        // If the computer has sunk the user's battleship, update the info display and set cpuBattleshipCount to 10
        if (cpuBattleshipCount === 4) {
          infoDisplay.innerHTML = 'You sunk the computers Battleship'
          cpuBattleshipCount = 10
        }
        // If the computer has sunk the user's carrier, update the info display and set cpuCarrierCount to 10
        if (cpuCarrierCount === 5) {
          infoDisplay.innerHTML = 'You sunk the computers Carrier'
          cpuCarrierCount = 10
        }

        // If the user has sunk all of the computer's ships, display "YOU WIN" on the info display and end the game
        if ((destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount) === 50) {
          infoDisplay.innerHTML = "YOU WIN"
          gameOver()
        }

        // If the computer has sunk all of the user's ships, display "COMPUTER WINS" on the info display and end the game
        if ((cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount) === 50) {
          infoDisplay.innerHTML = "COMPUTER WINS"
          gameOver()
        }
      }

      // This function sets the value of isGameOver to true and removes the event listener for the start button.
      function gameOver() {
        isGameOver = true
        startButton.removeEventListener('click', playGame)
      }

      // The function to handle the user's moves
      function playGame() {
        // ... (existing code for handling the user's moves)

        // Check for wins after each move
        checkForWins()

        // ... (existing code for handling the computer's moves)

        // Check for wins after each move
        checkForWins()
      }