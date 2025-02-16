using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Pathfinding;

public class EnemyGFXScript : MonoBehaviour
{
    void Start()
    {
        
    }

    void Update()
    {
        if(path.desiredVelocity.x >= 0.1f)
        {
            renderer.flipX = true;
        }else if (path.desiredVelocity.x <= -0.1f)
        {
            Renderer.
        }
    }
}
