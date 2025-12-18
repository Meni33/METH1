/*
  navbar.dart : Barre de navigation réutilisable
*/
import 'package:flutter/material.dart';
import 'color.dart';

class Navbar extends StatelessWidget {
  final String title;
  final VoidCallback onBackPressed;

  const Navbar({super.key, required this.title, required this.onBackPressed});

  @override
  Widget build(BuildContext context) {
    final cs = AppColors.getColorScheme(context);

    return Container(
      decoration: BoxDecoration(
        // Gradient de couleurs primaires
        gradient: LinearGradient(
          colors: [
            AppColors.getPrimaryContainerWithAlpha(cs),
            AppColors.getPrimaryWithAlpha(cs),
          ],
          begin: Alignment.centerLeft,
          end: Alignment.centerRight,
        ),
        // Coins arrondis en bas
        borderRadius: const BorderRadius.only(
          bottomLeft: Radius.circular(32),
          bottomRight: Radius.circular(32),
        ),
      ),
      padding: const EdgeInsets.only(top: 60, bottom: 32, left: 24, right: 24),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // Bouton retour
          IconButton(
            icon: const Icon(Icons.arrow_back),
            color: AppColors.white,
            onPressed: onBackPressed,
          ),
          const SizedBox(width: 8),
          // Titre
          Text(
            title,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: AppColors.white,
              fontWeight: FontWeight.bold,
              fontSize: 26,
            ),
          ),
          const Spacer(),
        ],
      ),
    );
  }
}
