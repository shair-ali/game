import random

def play_game(user_choice):
    choices = ['rock', 'paper', 'scissors', 'stone']
    computer_choice = random.choice(choices)

    print(f"Computer chose {computer_choice}")

    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'paper' and computer_choice == 'rock') or \
         (user_choice == 'scissors' and computer_choice == 'paper') or \
         (user_choice == 'stone' and computer_choice == 'scissors'):
        return "You win!"
    else:
        return "computer wins!"

# Example usage
user_choice = input("Enter your choice (rock, paper, scissors, stone): ")
result = play_game(user_choice)
print(result)