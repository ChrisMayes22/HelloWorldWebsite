function findSolution(number) {
    function search(start, history) {
        if(start > number){
            return null;
        }
        else if(start == number) {
            return history;
        }
        else {
            return search(start *3, "(" + history + "* 3)") || search(start +5, "(" + history + "+5)")
        }
    }
    console.log(search(1,"1"));
}

findSolution(15);