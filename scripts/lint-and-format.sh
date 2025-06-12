#!/bin/bash

# Script pour linter et formater tout le projet
# Usage: ./scripts/lint-and-format.sh [--fix] [--check-only]

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Arguments
FIX_MODE=false
CHECK_ONLY=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --fix)
      FIX_MODE=true
      shift
      ;;
    --check-only)
      CHECK_ONLY=true
      shift
      ;;
    *)
      echo "Usage: $0 [--fix] [--check-only]"
      echo "  --fix        Corriger automatiquement les erreurs"
      echo "  --check-only Vérifier seulement, ne pas corriger"
      exit 1
      ;;
  esac
done

echo -e "${BLUE}🔍 Début du linting et formatage du projet...${NC}"

# Fonction pour afficher les étapes
log_step() {
  echo -e "${YELLOW}📋 $1${NC}"
}

# Fonction pour afficher les succès
log_success() {
  echo -e "${GREEN}✅ $1${NC}"
}

# Fonction pour afficher les erreurs
log_error() {
  echo -e "${RED}❌ $1${NC}"
}

# Vérifier si pnpm est installé
if ! command -v pnpm &> /dev/null; then
  log_error "pnpm n'est pas installé. Veuillez l'installer d'abord."
  exit 1
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
  log_step "Installation des dépendances..."
  pnpm install
fi

if [ "$CHECK_ONLY" = true ]; then
  log_step "Mode vérification uniquement"
  
  # Vérifier ESLint
  log_step "Vérification ESLint..."
  if pnpm run lint:check; then
    log_success "ESLint: Aucune erreur trouvée"
  else
    log_error "ESLint: Erreurs détectées"
    exit 1
  fi
  
  # Vérifier Prettier
  log_step "Vérification Prettier..."
  if pnpm run format:check; then
    log_success "Prettier: Formatage correct"
  else
    log_error "Prettier: Fichiers mal formatés"
    exit 1
  fi
  
  log_success "Toutes les vérifications sont passées !"
  
elif [ "$FIX_MODE" = true ]; then
  log_step "Mode correction automatique"
  
  # Corriger avec ESLint
  log_step "Correction avec ESLint..."
  pnpm run lint:fix:all || true
  
  # Formater avec Prettier
  log_step "Formatage avec Prettier..."
  pnpm run format:all || true
  
  log_success "Correction et formatage terminés !"
  
else
  log_step "Mode lint standard"
  
  # Lint standard
  log_step "Linting avec ESLint..."
  pnpm run lint:all
  
  # Vérification du formatage
  log_step "Vérification du formatage..."
  pnpm run format:check
  
  log_success "Linting terminé avec succès !"
fi

echo -e "${BLUE}🎉 Processus terminé !${NC}" 