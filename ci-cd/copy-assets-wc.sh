BASE_URL="./src/assets/"
cd ..
  if [ -d "${BASE_URL}fonts" ]; then
    echo "Eliminando el directorio ${BASE_URL}fonts"
    rm -r ./src/assets/fonts
  else
    echo "El directorio ${BASE_URL}fonts no existe"
  fi

  if [ -d "${BASE_URL}img" ]; then
    echo "Eliminando el directorio ${BASE_URL}img"
    rm -r ./src/assets/img
  else
    echo "El directorio ${BASE_URL}img no existe"
  fi
mkdir -p ./src/assets
cp -r -f node_modules/@npm-bbta/bbog-dig-dt-sherpa-lib/dist/collection/assets/fonts ./src/assets/fonts
cp -r -f node_modules/@npm-bbta/bbog-dig-dt-sherpa-lib/dist/collection/assets/img ./src/assets/img
cp -f node_modules/@npm-bbta/bbog-dig-dt-sherpa-lib/dist/bbog-dig-dt-sherpa-lib/bbog-dig-dt-sherpa-lib.css ./src
cp -r -f node_modules/@npm-bbta/bbog-dig-dt-sherpa-lib/dist/react-component-lib ./src
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|/assets/|./assets/|g" src/bbog-dig-dt-sherpa-lib.css
else
  sed -i "s|/assets/|./assets/|g" src/bbog-dig-dt-sherpa-lib.css
fi
