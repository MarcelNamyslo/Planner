# Generated by Django 4.2.5 on 2023-09-25 20:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='description',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='title',
            new_name='time',
        ),
    ]
