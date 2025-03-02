using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;
    

public class EnemyGFX : MonoBehaviour
{
    public AIPath path;
    public SpriteRenderer renderer;
    void Start()
    {
        if (path.desiredVelocity.x >= 0.1f)
        {
            renderer.flipX = true;
        }else if (path.desiredVelocity.x >= 0.1f)
        {
            renderer.flipX = false;
        }
         
            
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
