/*
  contacts_screen.dart : Page de contact
*/
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/counter_store.dart';
import 'navbar.dart';
import 'color.dart';

class ContactsScreen extends StatelessWidget {
  const ContactsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final store = context.watch<CounterStore>();
    final cs = AppColors.getColorScheme(context);

    // Récupérer et trier les contacts
    final contacts = [...store.contacts];
    contacts.sort((a, b) {
      final ln = a.lastName.toLowerCase().compareTo(b.lastName.toLowerCase());
      if (ln != 0) return ln;
      return a.firstName.toLowerCase().compareTo(b.firstName.toLowerCase());
    });

    return Scaffold(
      backgroundColor: AppColors.getSurfaceColor(cs),
      body: Column(
        children: [
          // Barre de navigation
          Navbar(
            title: 'Contacts',
            onBackPressed: () => Navigator.of(context).pop(),
          ),
          Expanded(
            // Liste des contacts ou message vide
            child: contacts.isEmpty
                ? Center(
                    child: Text(
                      "Aucun contact enregistré",
                      style: TextStyle(
                        fontSize: 16,
                        color: AppColors.getOnSurfaceVariant(cs),
                      ),
                    ),
                  )
                : ListView.separated(
                    padding: const EdgeInsets.fromLTRB(16, 16, 16, 32),
                    itemCount: contacts.length,
                    separatorBuilder: (_, __) => const SizedBox(height: 12),
                    itemBuilder: (_, i) {
                      final c = contacts[i];
                      // Carte de contact
                      return Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 14,
                        ),
                        decoration: BoxDecoration(
                          color: AppColors.getSurfaceContainerHighest(cs),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Row(
                          children: [
                            // Avatar
                            CircleAvatar(
                              radius: 22,
                              backgroundColor: AppColors.getPrimaryContainer(
                                cs,
                              ),
                              child: Icon(
                                Icons.person,
                                color: AppColors.getOnPrimaryContainer(cs),
                                size: 22,
                              ),
                            ),
                            const SizedBox(width: 16),
                            // Infos du contact
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "${c.firstName} ${c.lastName}",
                                    style: TextStyle(
                                      fontSize: 17,
                                      fontWeight: FontWeight.w600,
                                      color: AppColors.getOnSurface(cs),
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    "ID : ${c.deviceId}",
                                    style: TextStyle(
                                      fontSize: 13,
                                      color: AppColors.getOnSurfaceVariant(cs),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}
