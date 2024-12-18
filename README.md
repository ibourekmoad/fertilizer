# Projet Fertilizer Analysis
## 💡 La logique derrière le projet
Ce projet a été conçu pour aider les agriculteurs à optimiser l'utilisation des fertilisants en fonction des besoins spécifiques de leurs sols et des cultures qu'ils souhaitent planter. 
La plateforme propose une solution numérique permettant :
1. **L'analyse du sol :** Les utilisateurs peuvent soumettre des informations sur leurs champs (taille, type de culture, problèmes rencontrés) et recevoir des recommandations personnalisées pour améliorer la fertilité.
2. **La gestion des fertilisants :** Une liste détaillée de fertilisants avec leurs compositions est mise à disposition pour permettre aux agriculteurs de choisir les produits adaptés à leurs besoins spécifiques.
3. **Une interface simple et intuitive :** L'objectif est de simplifier l'expérience utilisateur tout en fournissant des résultats fiables et exploitables.
En résumé, ce projet s'inscrit dans une démarche d'amélioration des pratiques agricoles en rendant accessible l'information technique sur les fertilisants et en optimisant les rendements agricoles.

---

## 🚀 Configuration et Installation

### Prérequis
- Python 3.9+
- Node.js 16+
- pip
- npm ou yarn

### Installation du Backend (Django)
1. Naviguez vers le dossier du backend :
   ```bash
   cd fertilizer-api/Agro_api
   ```

2. Créez un environnement virtuel :
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Unix/macOS
   # ou
   venv\Scripts\activate  # Sur Windows
   ```

3. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```

4. Configurez la base de données :
   ```bash
   python manage.py migrate
   ```

5. Lancez le serveur de développement :
   ```bash
   python manage.py runserver
   ```

### Installation du Frontend (Next.js)
1. Naviguez vers le dossier frontend :
   ```bash
   cd agro-main
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

---

## 📂 Structure du Projet
```
project-root/
│
├── fertilizer-api/                # Backend Django
│   ├── Agro_api/
│   │   ├── manage.py
│   │   ├── requirements.txt
│   │   └── apps/                  # Applications Django
│   │       ├── soil_analysis/
│   │       ├── fertilizer_management/
│   │       └── user_management/
│
├── agro-main/                     # Frontend Next.js
│   ├── package.json
│   ├── next.config.js
│   ├── components/                # Composants réutilisables
│   ├── pages/                     # Pages de l'application
│   └── styles/                    # Fichiers de styles
│
└── README.md
```

---

## 🛠️ Technologies Utilisées
- **Backend :** 
  - Django
  - Django REST Framework
  - PostgreSQL

- **Frontend :** 
  - Next.js
  - React
  - Tailwind CSS

- **Outils de Développement :**
  - Git
  - Docker (optionnel)
  - VSCode

---

## 🔒 Variables d'Environnement
Créez un fichier `.env` dans chaque dossier de projet avec les configurations suivantes :

### Backend (fertilizer-api)
```
SECRET_KEY=votre_clé_secrète
DATABASE_URL=postgresql://utilisateur:mot_de_passe@localhost/nom_base_de_donnees
DEBUG=True
```

### Frontend (agro-main)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

