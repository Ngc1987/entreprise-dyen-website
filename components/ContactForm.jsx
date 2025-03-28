import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Réinitialiser l'erreur lorsque l'utilisateur modifie un champ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez entrer votre nom';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez entrer votre email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.sujet) {
      newErrors.sujet = 'Veuillez sélectionner un sujet';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez entrer votre message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ 
        type: 'error', 
        message: 'Veuillez corriger les erreurs dans le formulaire' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Envoi en cours...' });

    try {
      // Simulation d'envoi - À remplacer par votre logique d'envoi réelle
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès !'
      });
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6" 
      noValidate 
      aria-describedby={status.message ? "form-status" : undefined}
      aria-label="Formulaire de contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.nom ? "true" : "false"}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.nom ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nom && (
            <p id="nom-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.nom}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            aria-describedby="telephone-description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
          <p id="telephone-description" className="mt-1 text-xs text-gray-500">
            Facultatif, mais recommandé pour vous contacter plus facilement
          </p>
        </div>

        <div>
          <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.sujet ? "true" : "false"}
            aria-describedby={errors.sujet ? "sujet-error" : undefined}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
              errors.sujet ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="chalet">Construction de chalet</option>
            <option value="extension">Extension</option>
            <option value="menuiserie">Menuiserie</option>
            <option value="autre">Autre</option>
          </select>
          {errors.sujet && (
            <p id="sujet-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.sujet}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status.message && (
        <div
          id="form-status"
          role="status"
          aria-live="polite"
          className={`p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <p className="text-sm text-gray-500">
        Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`btn btn-primary flex items-center justify-center gap-2 ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <Send size={20} aria-hidden="true" />
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
} 