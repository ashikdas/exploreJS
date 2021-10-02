function tinyFriend(friends){
    var tiny = friends[0];
    for (var i= 0; i< friends.length; i++){
        if(tiny.length > friends[i].length){
            tiny = friends[i];
        }
    }
    return tiny;
}

var result = tinyFriend(['rahim', 'karim', 'jamil', 'sadikh', 'ram']);
console.log(result);