import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  Buttons: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    gap: 10,
    justifyContent: 'center'
  },
  Button: {
    width: '30%',
    backgroundColor: '#257cc0',
    padding: 12,
  },
  CleanButton: {
    width: '100%',
    backgroundColor: '#257cc0',
    padding: 12,
    marginBottom: 20,
  },
  TextButton: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default styles;
