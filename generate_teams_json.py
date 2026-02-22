#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script zum Erstellen einer teams.json aus allen .md Dateien in content/teams/
Laufe dieses Skript nach jeder Änderung an den Mannschaften (z.B. nach einem Admin-Panel Commit).
"""

import os
import glob
import json
import yaml

# Pfad zur teams.json (wird im selben Ordner wie die .md Dateien abgelegt)
output_file = 'content/teams/teams.json'

# Sammle alle .md Dateien
team_files = glob.glob('content/teams/*.md')
teams = []

for filepath in team_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        # Trenne Frontmatter (YAML) vom restlichen Inhalt
        parts = content.split('---')
        if len(parts) >= 3:
            yaml_str = parts[1]
            try:
                data = yaml.safe_load(yaml_str)
            except Exception as e:
                print(f"Fehler beim Parsen von {filepath}: {e}")
                continue

            slug = os.path.basename(filepath).replace('.md', '')
            team = {
                'slug': slug,
                'title': data.get('title', slug),
                'description': data.get('description', ''),
                'image': data.get('image', '')
            }
            teams.append(team)
        else:
            print(f"Warnung: {filepath} enthält kein gültiges Frontmatter")

# Schreibe teams.json
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(teams, f, ensure_ascii=False, indent=2)

print(f"✅ teams.json wurde mit {len(teams)} Teams aktualisiert.")
