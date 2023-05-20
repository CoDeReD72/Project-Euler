fn multiples_of_3_and_5(number: i32) -> i32 {
    let mut sum  : i32 = 0;
    for i in 0..number {
        if i % 3 == 0 || i % 5 == 0 {
            sum += i;
        }
    }
    sum
}

fn main() {
    let result = multiples_of_3_and_5(1000);
    println!("{}", result);
}