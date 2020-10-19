require 'pry'

# 8.27.2020 phone number
def createPhoneNumber(numbers)
  numbers.map{|i| i.to_s}.insert(0,"(").insert(4,") ").insert(8, "-").join()
end

# 8.26.2020 filter photos level 6
def delete_nth(order,max_e)
  occurences = Hash.new(0)
  order.reject {|item| occurences[item].to_i += 1 > max_e}
end

delete_nth([20,37,20,21,20,37,37,20],2)
# 8.24.2020 anagrams level 5
def anagrams(word, words)
  anagrams = []
  words.each do |each_word|
    if word.chars.sort == each_word.chars.sort
      anagrams << each_word
    end
  end
  anagrams
end

# 8.19.2020
def sum_two_smallest_numbers(numbers)
  numbers.min(2).reduce(:+)
end

sum_two_smallest_numbers([5, 8, 12, 18, 22])

# #8.17.2020 Kata 7 kyu - Solution "no space array"
# def spacey(array)
#   return array.map((a,i)=>array.slice(0,i+1).join(''))
# end


#8.17.2020 Kata 8 kyu - Solution "return greeting"
def greet(name)
  return "Hello, #{name} how are you doing today?"
end

#8.16.2020 Solution "New Inhabitants"
def nb_year(p0, percent, aug, p)
  n=0
  new_population = p0
  until new_population >= p do
    new_population += new_population*(percent.to_f/100)+aug
    n+=1
  end  
  n
end

#8.14.2020 Solution "Square Digits"
def square_digits num
  num.to_s.split("").map{|x| x.to_i**2}.map{|x| x.to_s}.join.to_i
end


square_digits(18394)
#8.13.2020 Solution "Order Words"

def order(words)
  each_word = words.split(" ")
  new_words = []
  each_word.map do |word|
    i = 0
    while i < each_word.length do
      if word.include?((i+1).to_s)
        new_words[i] = word
      end
    i +=1
    end
  end  
  new_words.join(" ")
end

def order(words)
  words.split.sort_by { |w| w.chars.min } .join(" ")
end

#8.12.2020 Solution "Triangle"

def isTriangle(a,b,c)
  a + b > c && a + c > b && c + b > a
end

#8.12.2020 Solution "Western Suburbs Croquet Club" 

# Senior, at least 55 years old and handicap greater than 7. 

# Best Practices / Clever
def openOrSenior(data)
  data.map { |age, handicap| age >= 55 && handicap > 7 ? "Senior" : "Open" }
end

# original answer

def openOrSenior(data)
  players = []
  data.each do |player|
    if player[0] >= 55 && player[1] > 7
      players << "Senior"
    else
      players << "Open"
    end
  end
  players
end

# 8.11.2020 Solution "fill name in here"

def numberToString(num)
  num.to_s
end