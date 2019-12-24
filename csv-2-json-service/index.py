import pandas as pd

df = pd.read_csv('./data/Tipos_Residuos.csv', sep=';', encoding='latin1')

tapa_naranja = df[df.keys()[0]].values

# data = {'Name':['Tom', 'nick', 'krish', 'jack'], 'Age':[20, 21, 19, 18]}
data = {}

for key in df.keys():
  items = tapa_naranja = df[key].values
  for item in items:
    data[key] = item
# for key in df.keys():
print pd.DataFrame(data)
