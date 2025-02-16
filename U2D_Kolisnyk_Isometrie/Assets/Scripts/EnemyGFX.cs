using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

public class EnemyGFX : MonoBehaviour
{
    public AIPath path;
    public SpriteRenderer sprite;
    private void Start()
    {
        sprite = GetComponent<SpriteRenderer>();
        path = transform.parent.GetComponent<AIPath>();
    }
    private void Update()
    {
        if(path.desiredVelocity.x>=0.1f)
        {
            sprite.flipX = true;
        }
        else if (path.desiredVelocity.x <= 0.1f)
        {
            sprite.flipX = false;
        }
    }
}
