---
description: # Folder README Generator Workflow, ## Purpose Automatically generate README.md files for each folder in the project with a standardized, AI-indexable format.
---



## When to Use
- New project setup
- Adding new modules/packages
- Refactoring folder structure
- When a folder contains more than 2 files

## Format Template

```markdown
# FolderName

## Overview
Brief description of folder purpose.

## Files
- filename.py - Brief description
- another.py - Brief description

## Purpose
Detailed purpose statement.

## Exports
- ClassName - What it does
- FunctionName - What it does
```

## Generation Steps

### 1. Analyze Folder
```
1.1 List all files in folder
1.2 Identify main modules/classes
1.3 Determine folder responsibility
1.4 Check exports (__init__.py)
```

### 2. Generate README
```
2.1 Create README.md in folder root
2.2 Fill template with analyzed data
2.3 Include relative paths as links
2.4 Use consistent formatting
```

### 3. Index Requirements
```
3.1 Use H1 for folder name
3.2 Use bullet lists for files
3.3 Include file descriptions
4.4 Add purpose section
5.5 List exports clearly
```

## Example Output

For `app/domain/`:
```markdown
# Domain Layer

## Overview
Core business entities and rules, independent of frameworks.

## Files
- [entities/price_ticker.py](entities/price_ticker.py) - PriceTicker entity
- [enums/price_movement.py](enums/price_movement.py) - PriceMovement enum

## Purpose
Encapsulates price tracking logic: difference calculation, movement direction, state management.

## Exports
- PriceTicker - Entity for price tracking
- PriceMovement - Enum for price direction
```

## Integration with Kilo Code

### Usage
```bash
# Generate READMEs for all folders
kilocode generate-readmes

# Generate for specific folder
kilocode generate-readmes --folder app/domain
```

### AI Context
The format is designed to be:
- Parsable by AI assistants
- Searchable with relative links
- Extensible for new files

## Rules

1. Always use English for documentation
2. Keep descriptions under 20 words
3. Include file extensions in lists
4. Use relative paths as clickable links
5. Maintain alphabetical order in lists
6. Update when folder contents change
