# Generated by Django 5.0.6 on 2024-05-11 07:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("contacts", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="contact",
            old_name="photo_url",
            new_name="photo_path",
        ),
    ]
