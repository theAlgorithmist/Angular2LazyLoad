<?php
header("Content-Type: application/json");

$resp = "{ \"episodes\" : [
  {
    \"id\": 2,
    \"title\": \"DUMB CLUCKS\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1937-04-17\",
    \"type\": \"S\",
    \"duration\": 16.9,
    \"rating\": 8.48
  },
  { 
    \"id\": 3,
    \"title\": \"THE 3 STOOGES FOLLIES\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1974-11-22\",
    \"type\": \"F\",
    \"duration\": 106,
    \"rating\": 1.0
  },
  {
    \"id\": 6,
    \"title\": \"4 FOR TEXAS\",
    \"actors\": [\"M\", \"L\", \"JD\"],
    \"date\": \"1963-12-25\",
    \"type\": \"F\",
    \"duration\": 124,
    \"rating\": 6.50
  },
  {
    \"id\": 8,
    \"title\": \"A DUCKING THEY DID GO\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1939-04-07\",
    \"type\": \"S\",
    \"duration\": 16.33,
    \"rating\": 8.56
  },
  {
    \"id\": 9,
    \"title\": \"A PLUMBING WE WILL GO\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1940-04-19\",
    \"type\": \"S\",
    \"duration\": 17.67,
    \"rating\": 9.60
  },
  {
    \"id\": 12,
    \"title\": \"AN ACHE IN EVERY STAKE\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1941-08-22\",
    \"type\": \"S\",
    \"duration\": 18.2,
    \"rating\": 9.44
  },
  {
    \"id\": 13,
    \"title\": \"AFRICA SCREAMS\",
    \"actors\": [\"S\", \"JB\"],
    \"date\": \"1949-05-27\",
    \"type\": \"F\",
    \"duration\": 79,
    \"rating\": 7.67
  },
  {
    \"id\": 15,
    \"title\": \"ALL GUMMED UP\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1947-12-18\",
    \"type\": \"S\",
    \"duration\": 18.25,
    \"rating\": 8.10
  },
  {
    \"id\": 16,
    \"title\": \"ALL THE WORLD'S A STOOGE\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1941-05-16\",
    \"type\": \"S\",
    \"duration\": 16.2,
    \"rating\": 8.76
  },
  {
    \"id\": 17,
    \"title\": \"ANOTHER THIN MAN\",
    \"actors\": [\"S\"],
    \"date\": \"1939-11-17\",
    \"type\": \"F\",
    \"duration\": 103,
    \"rating\": 8.50
  },
  {
    \"id\": 18,
    \"title\": \"ANTS IN THE PANTRY\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1936-02-06\",
    \"type\": \"S\",
    \"duration\": 17.75,
    \"rating\": 8.82
  },
  {
    \"id\": 23,
    \"title\": \"BABY SITTERS JITTERS\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1951-02-01\",
    \"type\": \"S\",
    \"duration\": 16.2,
    \"rating\": 7.83
  },
  {
    \"id\": 24,
    \"title\": \"BACK FROM THE FRONT\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1943-05-28\",
    \"type\": \"S\",
    \"duration\": 17.8,
    \"rating\": 9.28
  },
  {
    \"id\": 25,
    \"title\": \"BACK TO THE WOODS\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1937-05-14\",
    \"type\": \"S\",
    \"duration\": 19.5,
    \"rating\": 7.72
  },
  {
    \"id\": 28,
    \"title\": \"BEDLAM IN PARADISE\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1955-04-14\",
    \"type\": \"S\",
    \"duration\": 15.9,
    \"rating\": 8.48
  },
  {
    \"id\": 30,
    \"title\": \"BEER BARREL POLECATS\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1946-01-10\",
    \"type\": \"S\",
    \"duration\": 17.5,
    \"rating\": 5.15
  },
  {
    \"id\": 33,
    \"title\": \"A BIRD IN THE HEAD\",
    \"actors\": [\"M\", \"L\", \"C\"],
    \"date\": \"1946-02-28\",
    \"type\": \"S\",
    \"duration\": 17.25,
    \"rating\": 6.55
  },
  {
    \"id\": 37,
    \"title\": \"BLUNDER BOYS\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1955-11-03\",
    \"type\": \"S\",
    \"duration\": 15.9,
    \"rating\": 9.30
  },
  {
    \"id\": 47,
    \"title\": \"BUBBLE TROUBLE\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1953-10-08\",
    \"type\": \"S\",
    \"duration\": 16.5,
    \"rating\": 5.59
  },
  {
    \"id\": 71,
    \"title\": \"CRIME ON THEIR HANDS\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1948-12-09\",
    \"type\": \"S\",
    \"duration\": 17.67,
    \"rating\": 9.34
  },
  {
    \"id\": 89,
    \"title\": \"DON'T THROW THAT KNIFE\",
    \"actors\": [\"M\", \"L\", \"S\"],
    \"date\": \"1951-05-03\",
    \"type\": \"S\",
    \"duration\": 15.8,
    \"rating\": 7.84
  },
  {
    \"id\": 103,
    \"title\": \"FIFI BLOWS HER TOP\",
    \"actors\": [\"M\", \"L\", \"JD\"],
    \"date\": \"1958-04-10\",
    \"type\": \"S\",
    \"duration\": 16.4,
    \"rating\": 4.88
  }
]}";

echo json_encode($resp);

exit;
?>