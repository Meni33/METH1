/*
  color.dart : Définition des couleurs de l'application
*/
import 'package:flutter/material.dart';

class AppColors {
  // Récupérer le ColorScheme
  static ColorScheme getColorScheme(BuildContext context) {
    return Theme.of(context).colorScheme;
  }

  // Couleurs primaires avec transparence
  static Color getPrimaryContainerWithAlpha(ColorScheme cs) {
    return cs.primaryContainer.withValues(alpha: 0.9);
  }

  static Color getPrimaryWithAlpha(ColorScheme cs) {
    return cs.primary.withValues(alpha: 0.8);
  }

  // Couleurs de surface
  static Color getSurfaceColor(ColorScheme cs) {
    return cs.surface;
  }

  static Color getSurfaceContainerHighest(ColorScheme cs) {
    return cs.surfaceContainerHighest;
  }

  // Couleurs texte
  static Color getOnSurfaceVariant(ColorScheme cs) {
    return cs.onSurfaceVariant;
  }

  static Color getOnSurface(ColorScheme cs) {
    return cs.onSurface;
  }

  static Color getPrimaryContainer(ColorScheme cs) {
    return cs.primaryContainer;
  }

  static Color getOnPrimaryContainer(ColorScheme cs) {
    return cs.onPrimaryContainer;
  }

  // Couleur constante
  static const Color white = Colors.white;
}
