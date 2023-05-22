multiplesSum :: Int -> Int
multiplesSum number = sum [x | x <- [1..number-1], x `mod` 3 == 0 || x `mod` 5 == 0]

main::IO()
main = do
    print (multiplesSum 1000) -- 233168