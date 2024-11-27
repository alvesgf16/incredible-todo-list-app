import { StyleSheet } from 'react-native';

const theme = {
  colors: {
    primary: '#007bff', // Blue
    secondary: '#ffc107', // Yellow
    error: '#ff007b', // Red
    background: '#fff', // White
    border: '#ccc', // Light Gray
    text: '#000', // Black
  },
  fontSizes: {
    xl: 24,
    large: 18,
    medium: 16,
    small: 14,
  },
  spacing: {
    small: 5,
    medium: 10,
    large: 20,
    xl: 40,
    xxl: 60,
  },
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
  },
  footer: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  footerText: {
    fontSize: theme.fontSizes.medium,
    textAlign: 'center',
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.large,
  },
  text: {
    fontSize: theme.fontSizes.medium,
    marginBottom: theme.spacing.medium,
  },
  taskListContainer: {
    marginTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.medium,
  },
  taskListHeaderText: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  task: {
    padding: theme.spacing.medium,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
  },
  completed: {
    backgroundColor: theme.colors.background,
  },
  taskText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: theme.spacing.medium,
    marginTop: theme.spacing.large,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    height: theme.spacing.xxl,
    justifyContent: 'start',

    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingHorizontal: theme.spacing.medium,
      paddingVertical: theme.spacing.small,
      maxHeight: theme.spacing.xl,
    },
    button: {
      height: theme.spacing.xl,
      backgroundColor: theme.colors.secondary,
    },
    error: {
      color: theme.colors.error,
      fontSize: theme.fontSizes.small,
    },
  },
});

export default styles;
