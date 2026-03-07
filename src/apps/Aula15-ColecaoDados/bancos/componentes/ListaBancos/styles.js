import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  CampoBusca: {
    backgroundColor: 'white',
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#e8e8e8'
  },
  Buttons: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    marginLeft: -10,
  },
  Button: {
    width: '29.8%',
    backgroundColor: '#257cc0',
    padding: 12,
    marginHorizontal: 10,
  },
  CleanButton: {
    width: '100%',
    backgroundColor: '#257cc0',
    padding: 12,
    marginBottom: 10,
  },
  TextButton: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default styles;
