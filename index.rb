require 'pry'
#8.13.2020 Solution "Order Words"

def order(words)
  each_word = words.split(" ")
  new_words = []
  each_word.map do |word|
    binding.pry
    i = 0
    while i < each_word.length do
      if word.include?((i+1).to_s)
        binding.pry
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