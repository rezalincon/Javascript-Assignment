// https://github.com/rezalincon/Javascript-Assignment


//Problem-1

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return ("Error : Invalid input");
    }
    else {
        var kilometer = kilo;
        var meter = kilometer * 1000;
        return meter;
    }
}



//Problem-2

function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var numberOfWatch = watch;
        var numberOfPhone = phone;
        var numberOfLaptop = laptop;
        var costOfWatch = numberOfWatch * 50;
        var costOfPhone = numberOfPhone * 100;
        var costOfLaptop = numberOfLaptop * 500;
        var totalBudget = costOfLaptop + costOfPhone + costOfWatch;
        return totalBudget;
    } else {
        return ("Error : Invalid input");
    }
}



//Problem-3

function hotelCost(days) {
    if (days >= 0) {
        if (days <= 10) {
            var count = days * 100;
            return count;
        }
        else if (days > 10 && days <= 20) {
            days = days - 10;
            count = (days * 80) + 1000;
            return count;
        }
        else if (days > 20) {
            days = days - 20;
            count = (days * 50) + 1800;
            return count;
        }
    }
    else {
        return ("Error : Invalid input")
    }
}



//Problem-4

function megaFriend(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}




