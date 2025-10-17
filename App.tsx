import { Formik } from 'formik';
import React, { useState } from 'react';
import {View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';



const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must be less than 50 characters')
    .required('Password length is required'),
});

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  
  const generatePasswordString = (passwordLength: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const password = createPassword(characters, passwordLength);
    setGeneratedPassword(password);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  const resetPasswordState = () => {
    setGeneratedPassword('');
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Password Generator</Text>
          
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              handleReset,
            }) => (
              <View style={styles.form}>
                <Text style={styles.label}>Password Length:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter password length"
                  onChangeText={handleChange('passwordLength')}
                  value={values.passwordLength}
                  keyboardType="numeric"
                />
                {errors.passwordLength && touched.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
                
                <TouchableOpacity 
                  style={[styles.button, !isValid && styles.buttonDisabled]} 
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <Text style={styles.buttonText}>Generate Password</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.resetButton} 
                  onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }}
                >
                  <Text style={styles.resetButtonText}>Reset</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          
          {generatedPassword ? (
            <View style={styles.passwordContainer}>
              <Text style={styles.passwordLabel}>Generated Password:</Text>
              <Text style={styles.passwordText}>{generatedPassword}</Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passwordLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  passwordText: {
    fontSize: 18,
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;