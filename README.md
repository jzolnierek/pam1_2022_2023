# Listowo
### Ważne
Aby aplikacja działała poprawnie, po pobraniu zależności, należy edytować plik znajdujący pod ścieżką:
node_modules/react-native-searchable-dropdown/index.js

Linie 175 oraz 218 w tym pliku powinny zostać zamienione na poniższy kod:
this.setState({ focus: false, item: this.props.selectedItems ? this.props.selectedItems : this.state.item });
