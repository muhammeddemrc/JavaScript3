function getRandomFriends (){
    var friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    var friendsLength = friends.length;

    var randomFriend = Math.floor(Math.random()* friendsLength);

    return friends[randomFriend] + " is going to lunch today!";
}